package org.paceman.search_bar.repository;

import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.paceman.search_bar.entity.City;
import org.paceman.search_bar.model.RequestModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CityRepository {

    @Query(nativeQuery = true)
    public List<City> getCityQuery (Session session, RequestModel model) {
        String letters = model.getText();
//        Invalidating initial data
        if (letters == "") letters = "-1223245235";
        String sql = "SELECT id, city_country FROM cities_and_countries cac \n" +
                "where lower(city_country) like lower ('%" +letters +"%')\n" +
                "order by id \n" +
                "limit 20";


        System.out.println("===========Query Starts===========");
        System.out.println(sql);
        System.out.println("===========Query Ends===========");

        NativeQuery<City> query = session.createNativeQuery(sql, City.class);
        return query.list();
    }
}
