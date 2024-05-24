package org.paceman.search_bar.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.paceman.search_bar.entity.City;
import org.paceman.search_bar.model.RequestModel;
import org.paceman.search_bar.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService{
    @Autowired
    private SessionFactory sessionFactory;
    @Autowired
    private CityRepository repository;

    @Override
    public List <City> executeNativeQuery (RequestModel model) {

        Session session = null;
        try {
            session = sessionFactory.openSession();
            List<City> result = repository.getCityQuery(session, model);

            return result;
        }
        catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        finally {
            if (session == null || session.isOpen()) {
                session.close();
            }
        }
        return null;
    }
}


