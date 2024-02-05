package com.depotage.entite;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "depot")
public class Depot extends Base{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private  String livNom;
    private  String livemail;
    private  String livContact;
    private  int prodQuantite;
    private  int prodDensite;
    private  boolean prodConforme;


    @Override
    public int getId() {
        return (int) id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLivNom() {
        return livNom;
    }

    public void setLivNom(String livNom) {
        this.livNom = livNom;
    }

    public String getLivemail() {
        return livemail;
    }

    public void setLivemail(String livemail) {
        this.livemail = livemail;
    }

    public String getLivContact() {
        return livContact;
    }

    public void setLivContact(String livContact) {
        this.livContact = livContact;
    }

    public int getProdQuantite() {
        return prodQuantite;
    }

    public void setProdQuantite(int prodQuantite) {
        this.prodQuantite = prodQuantite;
    }

    public int getProdDensite() {
        return prodDensite;
    }

    public void setProdDensite(int prodDensite) {
        this.prodDensite = prodDensite;
    }

    public boolean isProdConforme() {
        return prodConforme;
    }

    public void setProdConforme(boolean prodConforme) {
        this.prodConforme = prodConforme;
    }
}
