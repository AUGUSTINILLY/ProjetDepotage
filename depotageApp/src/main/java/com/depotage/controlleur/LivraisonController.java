package com.depotage.controlleur;

import com.depotage.entite.Livraison;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.LivraisonRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RequestMapping
@RestController
@CrossOrigin
public class LivraisonController {

    @Autowired
    private LivraisonRepository livraisonRepository;

    @GetMapping("/livraison")
    public List<Livraison> getAllLivraison() {
        return livraisonRepository.findAll();
    }

    @GetMapping("/livraison/{id}")
    public ResponseEntity<Livraison> getLivraisonById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison livraison = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Livraison not found for this id :: " + id));
        return ResponseEntity.ok().body(livraison);
    }

    @PostMapping("/livraison")
    public Livraison createLivraison( @RequestBody Livraison livraison) {
        return livraisonRepository.save(livraison);
    }

    @PutMapping("/livraison/{id}")
    public ResponseEntity<Livraison> updateLivraison(@PathVariable(value = "id") Long id,
                                                    @RequestBody Livraison livraisonDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison livraison = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Livraison not found for this id :: " + id));


        final Livraison updateLivraison = livraisonRepository.save(livraison);
        return ResponseEntity.ok(updateLivraison);
    }

    @DeleteMapping("/livraison/{id}")
    public Map<String, Boolean> deleteLivraison(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Livraison livraison = livraisonRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Livraison not found for this id :: " + id));

        livraisonRepository.delete(livraison);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
