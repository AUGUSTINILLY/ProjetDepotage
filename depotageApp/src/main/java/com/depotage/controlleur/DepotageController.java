package com.depotage.controlleur;

import com.depotage.entite.Cuve;
import com.depotage.entite.Depotage;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.CuveRepository;
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
    private CuveRepository cuveRepository;

    @GetMapping("/depotage")
    public List<Depotage> getAlldepots() {
        return depotageRepository.findAll();
    }

    @GetMapping("/depotage/{id}")
    public ResponseEntity<Depotage> getdepotById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depotage = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("depot not found for this id :: " + id));
        return ResponseEntity.ok().body(depotage);
    }

    @PostMapping("/depotage")
    public Depotage createdepot( @RequestBody Depotage depotage) {
        return depotageRepository.save(depotage);
    }

    @PutMapping("/updateQuantiteCarburant/{cuveId}")
    public ResponseEntity<?> updateQuantiteCarburant(@PathVariable Long cuveId, @RequestBody int quantiteLivre) {
        Cuve cuve = cuveRepository.findById(Math.toIntExact(cuveId)).orElse(null);
        if (cuve == null) {
            return ResponseEntity.notFound().build();
        }
        cuve.setQuanteducuve(cuve.getQuanteducuve() + quantiteLivre);
        cuveRepository.save(cuve);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/depotage/{id}")
    public ResponseEntity<Depotage> updatedepot(@PathVariable(value = "id") Long id,
                                             @RequestBody Depotage depotDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depotage = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("depot not found for this id :: " + id));
        depotage.setContientEau(depotDetails.isContientEau());
        depotage.setCoullage(depotDetails.getCoullage());
        depotage.setCuve(depotDetails.getCuve());
        depotage.setDensite(depotDetails.getDensite());
        depotage.setEcart(depotDetails.getEcart());
        depotage.setQuantiteApres(depotDetails.getQuantiteApres());
        depotage.setQuantiteAvant(depotDetails.getQuantiteAvant());
        depotage.setTemperatue(depotDetails.getTemperatue());
        depotage.setQuantiteTheorique(depotDetails.getQuantiteTheorique());
        final Depotage updatedepot = depotageRepository.save(depotage);
        return ResponseEntity.ok(updatedepot);
    }

    @DeleteMapping("/depotage/{id}")
    public Map<String, Boolean> deletedepot(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Depotage depot = depotageRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Depot not found for this id :: " + id));

        depotageRepository.delete(depot);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
/*
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

 */
}
