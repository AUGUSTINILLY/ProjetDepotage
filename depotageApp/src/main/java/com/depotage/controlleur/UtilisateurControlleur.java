package com.depotage.controlleur;

import com.depotage.dto.AuthentificationDTO;
import com.depotage.entite.Livraison;
import com.depotage.entite.Utilisateur;
import com.depotage.exception.ResourceNoFoundException;
import com.depotage.repository.UtilisateurRepository;
import com.depotage.securite.JwtService;
import com.depotage.service.UtilisateurService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin
public class UtilisateurControlleur {

    private AuthenticationManager authenticationManager;
    private UtilisateurService utilisateurService;
    private UtilisateurRepository utilisateurRepository;
    private JwtService jwtService;

    @PostMapping(path = "inscription")
    public void inscription(@RequestBody Utilisateur utilisateur) {
        this.utilisateurService.inscription(utilisateur);
    }
    @PutMapping("update/{id}")
    public Utilisateur mettreAJourInformations(@PathVariable Long id, @RequestBody Utilisateur utilisateur) throws ResourceNoFoundException.ResourceNotFoundException {
        // Vérifier si l'utilisateur existe
        if (!utilisateurRepository.existsById(Math.toIntExact(id))) {
            throw new ResourceNoFoundException.ResourceNotFoundException("Utilisateur avec l'ID " + id + " n'existe pas.");
        }

        // Mettre à jour les informations de l'utilisateur
        utilisateur.setId(Math.toIntExact(id)); // Assurez-vous que l'ID de l'utilisateur est correct
        return utilisateurService.mettreAJourInformations(utilisateur);
    }
/*
    @PostMapping(path = "activation")
    public void activation(@RequestBody Map<String, String> activation) {
        this.utilisateurService.activation(activation);
@PostMapping(path = "connexion")
    public Map<String, Object> connexion(@RequestBody AuthentificationDTO authentificationDTO) {
        final Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authentificationDTO.username(), authentificationDTO.password())
        );

        if(authenticate.isAuthenticated()) {
            // Récupérer les informations de l'utilisateur à partir de votre système de stockage de données
            Utilisateur user = utilisateurService.findByNom(authentificationDTO.username());

            // Générer le token JWT et inclure les informations de l'utilisateur dans la réponse
            Map<String, Object> response = jwtService.generate(authentificationDTO.username());
            response.put("user", user); // Ajouter les informations de l'utilisateur à la réponse

            return response;
        }
        return null;
    }
        @PostMapping(path = "connexion")
    public Map<String, String> connexion(@RequestBody AuthentificationDTO authentificationDTO) {
        final Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authentificationDTO.username(), authentificationDTO.password())
        );

        if(authenticate.isAuthenticated()) {
            return this.jwtService.generate(authentificationDTO.username());
        }
        return null;
    }


    }*/
    @GetMapping(path = "connexion/{id}")
    public ResponseEntity<Utilisateur> getUserById(@PathVariable(value = "id") Long id)
            throws ResourceNoFoundException.ResourceNotFoundException {
        Utilisateur utilisateur = utilisateurService.getUser(Math.toIntExact(id));
                //.orElseThrow(() -> new ResourceNoFoundException.ResourceNotFoundException("Livraison not found for this id :: " + id));
        return ResponseEntity.ok().body(utilisateur);
    }
    @PostMapping(path = "connexion")
    public Utilisateur connexion(@RequestBody AuthentificationDTO authentificationDTO) {
        final Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authentificationDTO.username(), authentificationDTO.password())
        );

        if (authenticate.isAuthenticated()) {
            return utilisateurService.lireUser(authentificationDTO.username());
        } else {
            // Gérer le cas où l'authentification échoue
            // Par exemple, renvoyer null ou une réponse d'erreur appropriée
            return null;
        }
    }
/*
    @PostMapping(path = "connexion")
public Map<String, Object> connexion(@RequestBody AuthentificationDTO authentificationDTO) {
    final Authentication authenticate = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(authentificationDTO.username(), authentificationDTO.password())
    );

    if(authenticate.isAuthenticated()) {
        Utilisateur user = utilisateurService.lireUser(authentificationDTO.username());
        Map<String, String> jwtMap = this.jwtService.generate(authentificationDTO.username());

        // Créer une nouvelle Map pour inclure les informations de l'utilisateur et le token JWT
        Map<String, Object> response = new HashMap<>();
        //response.put("token", jwtMap.get("token")); // Ajouter le token JWT
        response.put("user", user); // Ajouter les informations de l'utilisateur

        return response;
    }
    return null;
}
*/







}
