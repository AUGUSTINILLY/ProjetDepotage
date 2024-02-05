package com.depotage.service;

import com.depotage.entite.Base;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value ="baseService")
public interface BaseService {
    public Base save(Base entity);
    public  void delete( Class cl, Long id);
    public  void delete( Base entity);
    public List<Base> getAll(Class cl);
    public List<Base> findByParentId(Class cl, String col, Long id);

    public  Base find( Class cl, Long id);
    public  Base update( Base entity);

    public Session getConnection();
   /* public Base getLivraisonDetails(Long id);

    public Base updateLivraison(Class cl, Long id);

    public void deleteAllLivraisons();
*/
}
