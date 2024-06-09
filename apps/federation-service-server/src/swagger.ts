import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("Federation Service")
  .setDescription(
    'Service to manage federations, their members, clubs, and associated activities like events and leagues\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "Federation Service",
};
