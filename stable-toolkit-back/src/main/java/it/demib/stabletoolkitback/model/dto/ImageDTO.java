package it.demib.stabletoolkitback.model.dto;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.time.Instant;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(Include.NON_NULL)
public class ImageDTO {

  private String _id;

  private Object location;
  private Object fileName;
  private Object creationDate;
  private Object tags;
  private Object positivePrompt;
  private Object negativePrompt;
  private Object steps;
  private Object sampler;
  private Object denoise;
  private Object cfg;
  private Object modelHash;
  private Object faceRestoration;
  private Object hypernet;
  private Object clipSkip;
  private Object width;
  private Object height;
}
