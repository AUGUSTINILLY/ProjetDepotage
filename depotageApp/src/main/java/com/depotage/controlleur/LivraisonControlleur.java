package com.depotage.controlleur;

import com.depotage.entite.Base;
import com.depotage.entite.Livraison;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.LivraisonRepository;
import com.depotage.service.BaseServiceImplement;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RequestMapping
@RestController
@CrossOrigin
public class LivraisonControlleur {

    @Autowired
    private LivraisonRepository livraisonRepository;

    @GetMapping("/livraison")
    public List<Livraison> getAllEmployees() {
        return livraisonRepository.findAll();
    }

    @GetMapping("/livraison/{id}")
    public ResponseEntity<Livraison> getEmployeeById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison livraison = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Employee not found for this id :: " + id));
        return ResponseEntity.ok().body(livraison);
    }

    @PostMapping("/livraison")
    public Livraison createEmployee( @RequestBody Livraison livraison) {
        return livraisonRepository.save(livraison);
    }

    @PutMapping("/livraison/{id}")
    public ResponseEntity<Livraison> updateEmployee(@PathVariable(value = "id") Long id,
                                                   @RequestBody Livraison livraisonDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison livraison = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Employee not found for this id :: " + id));

        livraison.setId(livraisonDetails.getId());
        livraison.setNom(livraisonDetails.getNom());
        livraison.setQuantite(livraisonDetails.getQuantite());
        final Livraison updatedEmployee = livraisonRepository.save(livraison);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/livraison/{id}")
    public Map<String, Boolean> deleteLivraison(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison employee = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Employee not found for this id :: " + id));

        livraisonRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


   /* @Autowired
    @Qualifier("baseService")
    BaseServiceImplement baseService;
    @Transactional
    @RequestMapping( method = RequestMethod.POST,value = "/saveLivraison", headers = "Accept=application/json")
    public Base saveLivraison(@RequestBody Livraison livraison){
        Base saveLivraison = null;
        try {
            saveLivraison = this.baseService.save(livraison);
        }catch (Exception e){
            if (saveLivraison == null)
                saveLivraison = new Livraison();
            saveLivraison.setError(e.getMessage());
        }
        return saveLivraison;
    }



    @RequestMapping(method = RequestMethod.GET, value = "/deleteLivraison/{id}")
        public ResponseEntity<String> deleteLivraison(@PathVariable Long id) {
            try {
                if (baseService.find(Livraison.class, id) != null) {
                    baseService.delete(Livraison.class, id);
                    return ResponseEntity.ok("Livraison supprimée avec succès");
                } else {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La livraison avec l'ID " + id + " n'existe pas");
                }
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la suppression de la livraison");
            }
        }

    @RequestMapping(method = RequestMethod.GET,value = "/getAllLivraisons")
    public List<Livraison> getAllLivraison(){
        return (List)baseService.getAll(Livraison.class);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/detailsLivraison/{id}")
    public ResponseEntity<Base> detailsLivraison(@PathVariable Long id) {
        Base livraison = baseService.find(Livraison.class, id);
        if (livraison != null) {
            return ResponseEntity.ok(livraison);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/modifierLivraison/{id}")
    public ResponseEntity<Base> modifierLivraison( @RequestBody Livraison livraison) {

        Base updatedLivraison = baseService.update(livraison);
        if (updatedLivraison != null) {
            return ResponseEntity.ok(updatedLivraison);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
*/
}
