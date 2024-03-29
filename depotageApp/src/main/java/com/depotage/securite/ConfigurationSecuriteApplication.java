package com.depotage.securite;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
public class ConfigurationSecuriteApplication {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtFilter jwtFilter;
    private final UserDetailsService userDetailsService;
    public ConfigurationSecuriteApplication(BCryptPasswordEncoder bCryptPasswordEncoder, JwtFilter jwtFilter, UserDetailsService userDetailsService) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.jwtFilter = jwtFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return
                httpSecurity
                        .csrf(AbstractHttpConfigurer::disable)
                        .authorizeHttpRequests(
                                authorize ->
                                        authorize
                                                .requestMatchers(POST,"/inscription").permitAll()
                                                .requestMatchers(POST,"/activation").permitAll()
                                                .requestMatchers(POST,"/connexion").permitAll()
                                                .requestMatchers(POST,"/livraison").permitAll()
                                                .requestMatchers(PUT,"/update/{id}").permitAll()
                                                .requestMatchers(GET,"/livraison/{id}").permitAll()
                                                .requestMatchers(GET,"/livraison").permitAll()
                                                .requestMatchers(DELETE,"/livraison/{id}").permitAll()
                                                .requestMatchers(PUT,"/livraison/{id}").permitAll()
                                                .requestMatchers(POST,"/depot").permitAll()
                                                .requestMatchers(POST,"/personne").permitAll()
                                                .requestMatchers(GET,"/produit").permitAll()
                                                .requestMatchers(GET,"/depot/{id}").permitAll()
                                                .requestMatchers(GET,"/depot").permitAll()
                                                .requestMatchers(DELETE,"/depot/{id}").permitAll()
                                                .requestMatchers(PUT,"/depot/{id}").permitAll()
                                                .requestMatchers(GET,"/cuve").permitAll()
                                                .requestMatchers(POST,"/cuve").permitAll()
                                                .requestMatchers(GET,"/cuve/{id}").permitAll()
                                                .requestMatchers(PUT,"/cuve/{id}").permitAll()
                                                .requestMatchers(PUT,"/updateQuantiteCarburant/{cuveId}").permitAll()
                                                .requestMatchers(PUT,"/cuveQuantite/{id}").permitAll()
                                                .requestMatchers(GET,"/category").permitAll()
                                                .requestMatchers(GET,"/carburant").permitAll()
                                                .requestMatchers(GET,"/personne").permitAll()
                                                .requestMatchers(POST,"/depotage").permitAll()
                                                .requestMatchers(GET,"/depotage/{id}").permitAll()
                                                .requestMatchers(GET,"/depotage").permitAll()
                                                .requestMatchers(DELETE,"/depotage/{id}").permitAll()
                                                .requestMatchers(PUT,"/depotage/{id}").permitAll()
                                                .anyRequest().authenticated()
                        )
                        .sessionManagement(httpSecuritySessionManagementConfigurer ->
                                httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                        )
                        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                        .build();
    }

    @Bean
    public AuthenticationManager authenticationManager (AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider () {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return daoAuthenticationProvider;
    }
}
