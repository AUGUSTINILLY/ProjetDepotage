package com.depotage.service;

import com.depotage.entite.Base;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service(value = "baseService")
public class BaseServiceImplement implements  BaseService{
    @Override
    public Base save(Base entity) {
        return null;
    }

    @Override
    public void delete(Class cl, Long id) {

    }

    @Override
    public void delete(Base entity) {

    }

    @Override
    public List<Base> getAll(Class cl) {
        return null;
    }

    @Override
    public List<Base> findByParentId(Class cl, String col, Long id) {
        return null;
    }

    @Override
    public Base find(Class cl, Long id) {
        return null;
    }

    @Override
    public Base update(Base entity) {
        return null;
    }

    @Override
    public Session getConnection() {
        return null;
    }

}
