package com.depotage.controlleur;

import com.depotage.entite.Cuve;
import com.depotage.entite.Cuve;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.CuveRepository;
import com.depotage.repository.CuveRepository;
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
public class CuveController {

    @Autowired
    private CuveRepository cuveRepository;

    @GetMapping("/cuve")
    public List<Cuve> getAllCuve() {
        return cuveRepository.findAll();
    }

    @GetMapping("/cuve/{id}")
    public ResponseEntity<Cuve> getCuveById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Cuve Cuve = cuveRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Cuve not found for this id :: " + id));
        return ResponseEntity.ok().body(Cuve);
    }

    @PostMapping("/cuve")
    public Cuve createCuve( @RequestBody Cuve Cuve) {
        return cuveRepository.save(Cuve);
    }

    @PutMapping("/cuve/{id}")
    public ResponseEntity<Cuve> updateCuve(@PathVariable(value = "id") Long id,
                                                    @RequestBody Cuve CuveDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Cuve Cuve = cuveRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Cuve not found for this id :: " + id));

        //Cuve.setNomCuve(CuveDetails.getNomCuve());

        final Cuve updateCuve = cuveRepository.save(Cuve);
        return ResponseEntity.ok(updateCuve);
    }

    @DeleteMapping("/cuve/{id}")
    public Map<String, Boolean> deleteCuve(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Cuve Cuve = cuveRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Cuve not found for this id :: " + id));

        cuveRepository.delete(Cuve);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
