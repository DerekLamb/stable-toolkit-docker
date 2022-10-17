package it.demib.stabletoolkitback.repository;

import it.demib.stabletoolkitback.model.entity.Image;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends MongoRepository<Image, ObjectId> {

}
