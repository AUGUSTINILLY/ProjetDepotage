package com.depotage.controlleur;

import com.depotage.entite.Depot;
import com.depotage.entite.Livraison;
import com.depotage.exception.ResourceNoFoundException;
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
public class DepotController {

    @Autowired
    private DepotRepository depotRepository;

    @GetMapping("/depot")
    public List<Depot> getAlldepots() {
        return depotRepository.findAll();
    }

    @GetMapping("/depot/{id}")
    public ResponseEntity<Depot> getdepotById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depot depot = depotRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("depot not found for this id :: " + id));
        return ResponseEntity.ok().body(depot);
    }

    @PostMapping("/depot")
    public Depot createdepot( @RequestBody Depot depot) {
        return depotRepository.save(depot);
    }

    @PutMapping("/depot/{id}")
    public ResponseEntity<Depot> updatedepot(@PathVariable(value = "id") Long id,
                                                    @RequestBody Depot depotDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Depot depot = depotRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("depot not found for this id :: " + id));

        depot.setId(depotDetails.getId());
        depot.setLivNom(depotDetails.getLivNom());
        depot.setLivemail(depotDetails.getLivemail());
        depot.setLivContact(depotDetails.getLivContact());
        depot.setProdQuantite(depotDetails.getProdQuantite());
        depot.setProdDensite(depotDetails.getProdDensite());
        depot.setProdConforme(depotDetails.isProdConforme());
        final Depot updatedepot = depotRepository.save(depot);
        return ResponseEntity.ok(updatedepot);
    }

    @DeleteMapping("/depot/{id}")
    public Map<String, Boolean> deletedepot(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depot depot = depotRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Depot not found for this id :: " + id));

        depotRepository.delete(depot);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
