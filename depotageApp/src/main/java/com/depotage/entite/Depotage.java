package com.depotage.entite;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@Table(name = "Depotage")
//@DiscriminatorValue("DEPO")
public class Depotage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double densite;
    private double temperatue;
    private  double coullage;
    private double quantiteTheorique;
    private double quantiteAvant;
    private double quantiteApres;
    private boolean contientEau;
    private double ecart;
    @ManyToOne
    private Categorie categorie;

    @ManyToOne
    @JoinColumn(name = "Cuve_id")
    private Cuve cuve;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getDensite() {
        return densite;
    }

    public void setDensite(double densite) {
        this.densite = densite;
    }

    public double getTemperatue() {
        return temperatue;
    }

    public void setTemperatue(double temperatue) {
        this.temperatue = temperatue;
    }

    public double getCoullage() {
        return coullage;
    }

    public void setCoullage(double coullage) {
        this.coullage = coullage;
    }

    public double getQuantiteTheorique() {
        return quantiteTheorique;
    }

    public void setQuantiteTheorique(double quantiteTheorique) {
        this.quantiteTheorique = quantiteTheorique;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public double getQuantiteAvant() {
        return quantiteAvant;
    }

    public void setQuantiteAvant(double quantiteAvant) {
        this.quantiteAvant = quantiteAvant;
    }

    public double getQuantiteApres() {
        return quantiteApres;
    }

    public void setQuantiteApres(double quantiteApres) {
        this.quantiteApres = quantiteApres;
    }

    public boolean isContientEau() {
        return contientEau;
    }

    public void setContientEau(boolean contientEau) {
        this.contientEau = contientEau;
    }

    public double getEcart() {
        return ecart;
    }

    public void setEcart(double ecart) {
        this.ecart = ecart;
    }


    public Cuve getCuve() {
        return cuve;
    }

    public void setCuve(Cuve cuve) {
        this.cuve = cuve;
    }



}
