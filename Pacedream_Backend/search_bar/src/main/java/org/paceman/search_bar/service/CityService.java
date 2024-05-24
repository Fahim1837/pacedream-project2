package org.paceman.search_bar.service;

import org.paceman.search_bar.entity.City;
import org.paceman.search_bar.model.RequestModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CityService {
   List <City> executeNativeQuery (RequestModel model);
}
