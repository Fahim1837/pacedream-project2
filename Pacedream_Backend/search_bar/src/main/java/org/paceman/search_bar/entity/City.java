package org.paceman.search_bar.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table (name = "cities_and_countries")
public class City {

    @Id
    private int id;
    @Column(name = "city_country")
    private String cityCountry;
//    private String country;
//    private String city;
}
