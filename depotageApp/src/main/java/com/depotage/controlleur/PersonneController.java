package com.depotage.controlleur;

import com.depotage.entite.Livreur;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.PersonneRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping
@RestController
@CrossOrigin
public class PersonneController {

    @Autowired
    private PersonneRepository personneRepository;

    @GetMapping("/personne")
    public List<Livreur> getAllPersonne() {
        return personneRepository.findAll();
    }

    @GetMapping("/personne/{id}")
    public ResponseEntity<Livreur> getPersonneById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Livreur livreur = personneRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Personne not found for this id :: " + id));
        return ResponseEntity.ok().body(livreur);
    }

    @PostMapping("/personne")
    public Livreur createPersonne(@RequestBody Livreur livreur) {
        return personneRepository.save(livreur);
    }

    @PutMapping("/personne/{id}")
    public ResponseEntity<Livreur> updatePersonne(@PathVariable(value = "id") Long id,
                                                  @RequestBody Livreur livreurDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Livreur livreur = personneRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Personne not found for this id :: " + id));

        //carburant.setNomCarburant(carburantDetails.getNomCarburant());

        final Livreur updateLivreur = personneRepository.save(livreur);
        return ResponseEntity.ok(updateLivreur);
    }
/*
    @DeleteMapping("/personne/{id}")
    public Map<String, Boolean> deletePersonne(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Personne personne = personneRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Personne not found for this id :: " + id));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    */
}
