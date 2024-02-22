package com.depotage.controlleur;

import com.depotage.entite.Categorie;
import com.depotage.entite.Depot;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.CategorieRepository;
import com.depotage.repository.DepotRepository;
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
public class CategorieController {

    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping("/category")
    public List<Categorie> getAlldepots() {
        return categorieRepository.findAll();
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Categorie> getCategoryById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Categorie categorie = categorieRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Category not found for this id :: " + id));
        return ResponseEntity.ok().body(categorie);
    }

    @PostMapping("/category")
    public Categorie createCategory( @RequestBody Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @PutMapping("/category/{id}")
    public ResponseEntity<Categorie> updateCategory(@PathVariable(value = "id") Long id,
                                                    @RequestBody Categorie categoryDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Categorie categorie = categorieRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Category not found for this id :: " + id));

        categorie.setNomCategorie(categoryDetails.getNomCategorie());

        final Categorie updatecategory = categorieRepository.save(categorie);
        return ResponseEntity.ok(updatecategory);
    }

    @DeleteMapping("/category/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Categorie categorie = categorieRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Category not found for this id :: " + id));

        categorieRepository.delete(categorie);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
