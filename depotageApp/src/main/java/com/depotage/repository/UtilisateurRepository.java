package com.depotage.repository;

import com.depotage.entite.Utilisateur;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UtilisateurRepository extends CrudRepository<Utilisateur, Integer> {
    Optional<Utilisateur> findByEmail(String email);

}
