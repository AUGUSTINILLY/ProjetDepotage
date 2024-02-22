package com.depotage.entite;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cuve")
public class Cuve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCuve;
    private int Capacite;
    private String nomCuve;
    @OneToMany(mappedBy = "cuve", fetch = FetchType.LAZY)
    private Collection<Depotage> depotage;
    public long getIdCuve() {
        return idCuve;
    }

    public void setIdCuve(long idCuve) {
        this.idCuve = idCuve;
    }

    public int getCapacite() {
        return Capacite;
    }

    public void setCapacite(int capacite) {
        Capacite = capacite;
    }

    public String getNomCuve() {
        return nomCuve;
    }

    public void setNomCuve(String nomCuve) {
        this.nomCuve = nomCuve;
    }
}
