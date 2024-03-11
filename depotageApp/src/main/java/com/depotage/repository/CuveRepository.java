package com.depotage.repository;

import com.depotage.entite.Cuve;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CuveRepository extends JpaRepository<Cuve, Integer> {
    @Override
    Optional<Cuve> findById(Integer integer);
}
