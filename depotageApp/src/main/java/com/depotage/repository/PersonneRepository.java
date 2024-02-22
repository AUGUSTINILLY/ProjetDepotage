package com.depotage.repository;

import com.depotage.entite.Livreur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonneRepository extends JpaRepository<Livreur, Integer> {
}
