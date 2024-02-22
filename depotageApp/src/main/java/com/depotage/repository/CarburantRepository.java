package com.depotage.repository;

import com.depotage.entite.Carburant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarburantRepository extends JpaRepository<Carburant, Integer> {
}
