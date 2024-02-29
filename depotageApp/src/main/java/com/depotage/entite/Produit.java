package com.depotage.entite;

import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "produit")
/*
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", length = 4 )
*/
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idProduit;
    private String nomProduit;
    /*
    @ManyToOne
    private Categorie typeProduit;


    @OneToMany(mappedBy = "produit")
    private Collection<Livraison> produitLivre;
    */
    public long getIdProduit() {
        return idProduit;
    }

    public void setIdProduit(long idProduit) {
        this.idProduit = idProduit;
    }

    public String getNomProduit() {
        return nomProduit;
    }

    public void setNomProduit(String comProduit) {
        this.nomProduit = comProduit;
    }

   }
