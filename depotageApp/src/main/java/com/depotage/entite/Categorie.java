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
@Table(name = "categorie")
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCategorie;
    private String nomCategorie;
    /*
    @OneToMany(mappedBy = "typeProduit", fetch = FetchType.LAZY)
    private Collection<Produit> typeProduit;
*/
    public void setIdCategorie(long idCategorie) {
        this.idCategorie = idCategorie;
    }

    public String getNomCategorie() {
        return nomCategorie;
    }

    public void setNomCategorie(String nomCtegorie) {
        this.nomCategorie = nomCtegorie;
    }
}
