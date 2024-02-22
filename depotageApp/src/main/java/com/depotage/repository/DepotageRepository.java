package com.depotage.repository;

import com.depotage.entite.Depotage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepotageRepository extends JpaRepository<Depotage, Integer> {
}
