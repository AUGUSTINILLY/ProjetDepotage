package com.depotage.controlleur;

import com.depotage.entite.Carburant;
import com.depotage.entite.Depotage;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.CarburantRepository;
import com.depotage.repository.DepotageRepository;
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
public class DepotageController {

    @Autowired
    private DepotageRepository depotageRepository;

    @GetMapping("/depotage")
    public List<Depotage> getAllDepotage() {
        return depotageRepository.findAll();
    }

    @GetMapping("/depotage/{id}")
    public ResponseEntity<Depotage> getCarburantById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depotage = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Depotage not found for this id :: " + id));
        return ResponseEntity.ok().body(depotage);
    }

    @PostMapping("/depotage")
    public Depotage createDepotage( @RequestBody Depotage depotage) {
        return depotageRepository.save(depotage);
    }

    @PutMapping("/depotage/{id}")
    public ResponseEntity<Depotage> updateDepotage(@PathVariable(value = "id") Long id,
                                                    @RequestBody Depotage depotageDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depotage = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Depotage not found for this id :: " + id));

        //carburant.setNomCarburant(carburantDetails.getNomCarburant());

        final Depotage updateDepotage = depotageRepository.save(depotage);
        return ResponseEntity.ok(updateDepotage);
    }

    @DeleteMapping("/depotage/{id}")
    public Map<String, Boolean> deleteDepotage(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depotage = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Depotage not found for this id :: " + id));

        depotageRepository.delete(depotage);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
