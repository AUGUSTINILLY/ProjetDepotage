package com.depotage.service;

import com.depotage.entite.Role;
import com.depotage.TypeDeRole;
import com.depotage.entite.Utilisateur;
import com.depotage.entite.Validation;
import com.depotage.repository.UtilisateurRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Map;
import java.util.Optional;
@AllArgsConstructor
@Service
public class UtilisateurService implements UserDetailsService {
    private UtilisateurRepository utilisateurRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private ValidationService validationService;

    public void inscription(Utilisateur utilisateur) {

        if (!utilisateur.getEmail().contains("@")) {
            throw new RuntimeException("Votre mail invalide");
        }
        if (!utilisateur.getEmail().contains(".")) {
            throw new RuntimeException("Votre mail invalide");
        }

        Optional<Utilisateur> utilisateurOptional = this.utilisateurRepository.findByNom(utilisateur.getNom());
        if (utilisateurOptional.isPresent()) {
            throw new RuntimeException("Votre mail est déjà utilisé");
        }
        String mdpCrypte = this.passwordEncoder.encode(utilisateur.getMdp());
        utilisateur.setMdp(mdpCrypte);

        Role roleUtilisateur = new Role();
        roleUtilisateur.setLibelle(TypeDeRole.GERANT);
        utilisateur.setRole(roleUtilisateur);
        this.utilisateurRepository.save(utilisateur);

        //utilisateur = this.utilisateurRepository.save(utilisateur);
        //this.validationService.enregistrer(utilisateur);
    }
    public Utilisateur mettreAJourInformations(Utilisateur utilisateur) {
        String mdpCrypte = this.passwordEncoder.encode(utilisateur.getMdp());
        utilisateur.setMdp(mdpCrypte);

        Role roleUtilisateur = new Role();
        roleUtilisateur.setLibelle(TypeDeRole.GERANT);
        utilisateur.setRole(roleUtilisateur);
        return utilisateurRepository.save(utilisateur);
    }
/*
    public void activation(Map<String, String> activation) {

        Validation validation = this.validationService.lireEnFonctionDuCode(activation.get("code"));
        if (Instant.now().isAfter(validation.getExpiration())) {
            throw new RuntimeException("Votre code a expiré");
        }
        Utilisateur utilisateurActiver = this.utilisateurRepository.findById(validation.getUtilisateur().getId()).orElseThrow(() -> new RuntimeException("Utilisateur inconnu"));
        utilisateurActiver.setActif(true);
        this.utilisateurRepository.save(utilisateurActiver);

    }*/

    @Override
    public Utilisateur loadUserByUsername(String username) throws UsernameNotFoundException {

        return this.utilisateurRepository
                //.findByEmail(username)
                .findByNom(username)
                .orElseThrow(() -> new UsernameNotFoundException("Aucun utilisateur ne corespond à cet identifiant"));

    }
    public Utilisateur lireUser(String username) throws UsernameNotFoundException{
        // Implémentez la logique pour récupérer l'utilisateur par son nom d'utilisateur
        return utilisateurRepository
                .findByNom(username)
                .orElseThrow(() -> new UsernameNotFoundException("Aucun utilisateur ne corespond à cet identifiant"));

    }

    public Utilisateur getUser(int id) throws UsernameNotFoundException{
        // Implémentez la logique pour récupérer l'utilisateur par son nom d'utilisateur
        return utilisateurRepository
                .findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Aucun utilisateur ne corespond à cet identifiant"));

    }


}
