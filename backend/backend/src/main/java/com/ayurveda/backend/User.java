package com.ayurveda.backend;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // e.g., USER or ADMIN

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String profession;

    public User() {}

    public User(String username, String password, String role, String email, String profession) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.profession = profession;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getProfession() { return profession; }
    public void setProfession(String profession) { this.profession = profession; }
} 