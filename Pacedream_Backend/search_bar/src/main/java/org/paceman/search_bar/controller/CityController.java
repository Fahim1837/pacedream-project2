package org.paceman.search_bar.controller;

import org.paceman.search_bar.entity.City;
import org.paceman.search_bar.model.RequestModel;
import org.paceman.search_bar.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/location")
public class CityController {

    @Autowired
    private CityService service;

    @CrossOrigin
    @PostMapping("/data")
    public ResponseEntity <List<City>> searchCity (@RequestBody RequestModel model) {
        List <City> response = service.executeNativeQuery(model);
        return ResponseEntity.ok(response);
    }
}
