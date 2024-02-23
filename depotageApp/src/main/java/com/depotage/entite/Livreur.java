package com.depotage.entite;

import jakarta.persistence.*;
import org.hibernate.mapping.List;

import java.util.Collection;

@Entity
@Table(name = "livreur")
public class Livreur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLivreur;
    @JoinColumn(name = "NOM")
    private  String nomLivreur;
    @JoinColumn(name = "E-MAIL")

    private String emailLivreur;
    @JoinColumn(name = "CONTACT")

    private String contactLivreur;
    @OneToMany(mappedBy = "livreur", fetch = FetchType.LAZY)
    private Collection<Livraison> livraison;




    public Long getIdLivreur() {
        return idLivreur;
    }

    public void setIdLivreur(Long idLivreur) {
        this.idLivreur = idLivreur;
    }

    public String getNomLivreur() {
        return nomLivreur;
    }

    public void setNomLivreur(String nomLivreur) {
        this.nomLivreur = nomLivreur;
    }

    public String getEmailLivreur() {
        return emailLivreur;
    }

    public void setEmailLivreur(String emailLivreur) {
        this.emailLivreur = emailLivreur;
    }

    public String getContactLivreur() {
        return contactLivreur;
    }

    public void setContactLivreur(String contactLivreur) {
        this.contactLivreur = contactLivreur;
    }
}
