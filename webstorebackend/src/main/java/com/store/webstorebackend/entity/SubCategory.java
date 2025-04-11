package com.store.webstorebackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "subcategory")
@Data
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 150)
    private String subcategoryname;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cat_id")
    private Category category;

}
