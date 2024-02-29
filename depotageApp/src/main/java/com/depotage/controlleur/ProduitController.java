package com.depotage.controlleur;

import com.depotage.entite.Produit;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.ProduitRepository;
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
public class ProduitController {

    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping("/produit")
    public List<Produit> getAllCarburant() {
        return produitRepository.findAll();
    }

    @GetMapping("/produit/{id}")
    public ResponseEntity<Produit> getCarburantById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Produit produit = produitRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Produit not found for this id :: " + id));
        return ResponseEntity.ok().body(produit);
    }

    @PostMapping("/produit")
    public Produit createProduit( @RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @PutMapping("/produit/{id}")
    public ResponseEntity<Produit> updateProduitt(@PathVariable(value = "id") Long id,
                                                    @RequestBody Produit produitDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Produit produit = produitRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Produit not found for this id :: " + id));

        //carburant.setNomCarburant(carburantDetails.getNomCarburant());

        final Produit updateProduit = produitRepository.save(produit);
        return ResponseEntity.ok(updateProduit);
    }

    @DeleteMapping("/Produit/{id}")
    public Map<String, Boolean> deleteCarburant(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Produit produit = produitRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Produit not found for this id :: " + id));

        produitRepository.delete(produit);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
