package com.depotage.repository;

import com.depotage.entite.Depot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepotRepository extends JpaRepository<Depot, Integer> {
}
