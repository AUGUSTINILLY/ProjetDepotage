package com.depotage.controlleur;

import com.depotage.entite.Carburant;
import com.depotage.entite.Categorie;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.CarburantRepository;
import com.depotage.repository.CategorieRepository;
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
public class CarburantController {

    @Autowired
    private CarburantRepository carburantRepository;

    @GetMapping("/carburant")
    public List<Carburant> getAllCarburant() {
        return carburantRepository.findAll();
    }

    @GetMapping("/carburant/{id}")
    public ResponseEntity<Carburant> getCarburantById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Carburant carburant = carburantRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Carburant not found for this id :: " + id));
        return ResponseEntity.ok().body(carburant);
    }

    @PostMapping("/carburant")
    public Carburant createCarburant( @RequestBody Carburant carburant) {
        return carburantRepository.save(carburant);
    }

    @PutMapping("/carburant/{id}")
    public ResponseEntity<Carburant> updateCarburant(@PathVariable(value = "id") Long id,
                                                    @RequestBody Carburant carburantDetails) throws ResourceNoFoundException.ResourceNotFoundException {
        Carburant carburant = carburantRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Carburant not found for this id :: " + id));


        final Carburant updateCarburant = carburantRepository.save(carburant);
        return ResponseEntity.ok(updateCarburant);
    }

    @DeleteMapping("/carburant/{id}")
    public Map<String, Boolean> deleteCarburant(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Carburant carburant = carburantRepository.findById(Math.toIntExact(id))
                .orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Carburant not found for this id :: " + id));

        carburantRepository.delete(carburant);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
