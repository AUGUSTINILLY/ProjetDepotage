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
    /*
    @Autowired
    BaseDao<Base, String> baseDao;

    @Override
    public Base save(Base entity) {
        Base saveBase = entity;
        try {
            entity.setCreateddate(new Date());
            if (entity.getId() == null){
                saveBase= this.baseDao.persist(entity);
            }else {
                saveBase= this.baseDao.merge(entity);
            }
            saveBase.setError("Success");
        }catch (Exception e){
            e.printStackTrace();
            saveBase.setError(e.getMessage());
        }

        return saveBase;
    }

    @Override
    public void delete(Class cl, Long id) {
        this.baseDao.delete(cl, id);

    }

    @Override
    public void delete(Base entity) {
        this.baseDao.delete(entity);

    }

    @Override
    public List<Base> getAll(Class cl) {
        return this.baseDao.getAll(cl);
    }

    @Override
    public List<Base> findByParentId(Class cl, String col, Long id) {
        return this.baseDao.findByParentId(cl, col, id);
    }

    public Base update(Base entity){
        return baseDao.merge(entity);
    }
    @Override
    public Base find(Class cl, Long id) {
        return (Base)this.baseDao.find(cl, id);
    }

    @Override
    public Session getConnection() {
        return (Session) this.baseDao.getConnection();
    }

    @Override
    public Base getLivraisonDetails(Class cl,Long id) {
        return this.baseDao.find(cl, id);
    }

    @Override
    public Base updateLivraison(Class cl) {
        return this.baseDao.merge(cl);
    }

    @Override
    public void deleteAllLivraisons() {
        List<Base> livraisons = this.baseDao.getAll(Livraison.class);
        for (Base livraison : livraisons) {
            this.baseDao.delete(livraison);
        }
    }
*/
}
