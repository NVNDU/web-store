package com.store.webstorebackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Item")
@Data
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length=150)
    private String name;

    private Double price;

    private String Description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "subcat_id")
    private SubCategory subCategory;
}
