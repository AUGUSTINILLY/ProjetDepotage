package com.depotage.entite;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Transient;

import java.util.Date;

@MappedSuperclass
public abstract class Base {

    public  abstract int getId();

    @Column(name = "CREATED_DATE")
    private Date createddate;
    @Transient
    private String error;

    public Date getCreateddate() {
        return createddate;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public void setCreateddate(Date createddate) {
        this.createddate = createddate;
    }
}
