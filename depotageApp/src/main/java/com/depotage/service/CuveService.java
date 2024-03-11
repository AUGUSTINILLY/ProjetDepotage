package com.depotage.service;

import com.depotage.entite.Cuve;
import com.depotage.repository.CuveRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CuveService {
    @Autowired
    private CuveRepository cuveRepository;

    @Transactional
    public void mettreAJourQuantiteCuve(long idCuve, int quantiteToAdd) {
        Cuve cuve = cuveRepository.findById((int) idCuve)
                .orElseThrow(() -> new IllegalArgumentException("Cuve non trouvée avec l'ID: " + idCuve));

        // Mettre à jour la quantité de la cuve
        cuve.setQuanteducuve(cuve.getQuanteducuve() + quantiteToAdd);

        // Enregistrer les modifications
        cuveRepository.save(cuve);
    }
}
