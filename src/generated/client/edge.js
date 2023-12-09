
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ActoresScalarFieldEnum = {
  id: 'id',
  url_imagen: 'url_imagen',
  url_biografia: 'url_biografia',
  pelicula_id: 'pelicula_id'
};

exports.Prisma.PeliculaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  sipnosis: 'sipnosis',
  fecha_distribucion: 'fecha_distribucion',
  promocionar: 'promocionar',
  duracion: 'duracion',
  distribuidor: 'distribuidor',
  isan: 'isan',
  url_poster: 'url_poster',
  aws_url: 'aws_url',
  aws_trailer: 'aws_trailer',
  solicitud_id: 'solicitud_id'
};

exports.Prisma.ActoresOnPeliculasScalarFieldEnum = {
  actor_id: 'actor_id',
  pelicula_id: 'pelicula_id'
};

exports.Prisma.SolicitudScalarFieldEnum = {
  id: 'id',
  estado: 'estado',
  fecha_envio: 'fecha_envio',
  fecha_respuesta: 'fecha_respuesta',
  observaciones: 'observaciones',
  usuario_id: 'usuario_id'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  correo: 'correo',
  genero: 'genero',
  telefono: 'telefono',
  rol: 'rol',
  password: 'password',
  primer_apellido: 'primer_apellido',
  primer_nombre: 'primer_nombre',
  segundo_apellido: 'segundo_apellido',
  segundo_nombre: 'segundo_nombre'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Solicitud_estado = exports.$Enums.Solicitud_estado = {
  PENDIENTE: 'PENDIENTE',
  RECHAZADA: 'RECHAZADA',
  APROBADA: 'APROBADA'
};

exports.Rol = exports.$Enums.Rol = {
  USUARIO: 'USUARIO',
  ADMIN: 'ADMIN',
  PRODUCTOR: 'PRODUCTOR'
};

exports.Prisma.ModelName = {
  Actores: 'Actores',
  Pelicula: 'Pelicula',
  ActoresOnPeliculas: 'ActoresOnPeliculas',
  Solicitud: 'Solicitud',
  Usuario: 'Usuario'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/martinez/Documents/Proyects/Marine/Movie-Banckend/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgICAgICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9jbGllbnQiCiAgYmluYXJ5VGFyZ2V0cyA9IFsiZGFyd2luIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEFjdG9yZXMgewogIGlkICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1cmxfaW1hZ2VuICAgIFN0cmluZwogIHVybF9iaW9ncmFmaWEgU3RyaW5nCiAgcGVsaWN1bGFfaWQgICBJbnQKICBQZWxpY3VsYSAgICAgIEFjdG9yZXNPblBlbGljdWxhc1tdCn0KCm1vZGVsIFBlbGljdWxhIHsKICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub21icmUgICAgICAgICAgICAgU3RyaW5nCiAgc2lwbm9zaXMgICAgICAgICAgIFN0cmluZwogIGZlY2hhX2Rpc3RyaWJ1Y2lvbiBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig0KQogIHByb21vY2lvbmFyICAgICAgICBCb29sZWFuPyAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGR1cmFjaW9uICAgICAgICAgICBGbG9hdD8KICBkaXN0cmlidWlkb3IgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjApCiAgaXNhbiAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDk2KQogIHVybF9wb3N0ZXIgICAgICAgICBTdHJpbmcKICBhd3NfdXJsICAgICAgICAgICAgU3RyaW5nPwogIGF3c190cmFpbGVyICAgICAgICBTdHJpbmc/CiAgc29saWNpdHVkX2lkICAgICAgIEludCAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBBY3RvcmVzICAgICAgICAgICAgQWN0b3Jlc09uUGVsaWN1bGFzW10KICBzb2xpY2l0dWQgICAgICAgICAgU29saWNpdHVkICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NvbGljaXR1ZF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIEFjdG9yZXNPblBlbGljdWxhcyB7CiAgYWN0b3JfaWQgICAgSW50CiAgcGVsaWN1bGFfaWQgSW50CiAgYWN0b3IgICAgICAgQWN0b3JlcyAgQHJlbGF0aW9uKGZpZWxkczogW2FjdG9yX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwZWxpY3VsYSAgICBQZWxpY3VsYSBAcmVsYXRpb24oZmllbGRzOiBbcGVsaWN1bGFfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQGlkKFthY3Rvcl9pZCwgcGVsaWN1bGFfaWRdKQogIEBAaW5kZXgoW3BlbGljdWxhX2lkXSwgbWFwOiAiQWN0b3Jlc09uUGVsaWN1bGFzX3BlbGljdWxhX2lkX2ZrZXkiKQp9Cgptb2RlbCBTb2xpY2l0dWQgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGVzdGFkbyAgICAgICAgICBTb2xpY2l0dWRfZXN0YWRvPyBAZGVmYXVsdChQRU5ESUVOVEUpCiAgZmVjaGFfZW52aW8gICAgIERhdGVUaW1lPyAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGZlY2hhX3Jlc3B1ZXN0YSBEYXRlVGltZT8KICBvYnNlcnZhY2lvbmVzICAgU3RyaW5nPwogIHVzdWFyaW9faWQgICAgICBJbnQKICBQZWxpY3VsYSAgICAgICAgUGVsaWN1bGE/CiAgVXN1YXJpbyAgICAgICAgIFVzdWFyaW8gICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c3VhcmlvX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbdXN1YXJpb19pZF0sIG1hcDogIlNvbGljaXR1ZF91c3VhcmlvX2lkX2ZrZXkiKQp9Cgptb2RlbCBVc3VhcmlvIHsKICBpZCAgICAgICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29ycmVvICAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDUwKQogIGdlbmVybyAgICAgICAgICAgU3RyaW5nICAgICAgQGRiLkNoYXIoMSkKICB0ZWxlZm9ubyAgICAgICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDEwKQogIHJvbCAgICAgICAgICAgICAgUm9sCiAgcGFzc3dvcmQgICAgICAgICBTdHJpbmcKICBwcmltZXJfYXBlbGxpZG8gIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDIwKQogIHByaW1lcl9ub21icmUgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMjApCiAgc2VndW5kb19hcGVsbGlkbyBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMCkKICBzZWd1bmRvX25vbWJyZSAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDIwKQogIFNvbGljaXR1ZCAgICAgICAgU29saWNpdHVkW10KfQoKZW51bSBTb2xpY2l0dWRfZXN0YWRvIHsKICBQRU5ESUVOVEUKICBSRUNIQVpBREEKICBBUFJPQkFEQQp9CgplbnVtIFJvbCB7CiAgVVNVQVJJTwogIEFETUlOCiAgUFJPRFVDVE9SCn0K",
  "inlineSchemaHash": "86328510461dc79927eef0a99b3dccd5ecc195177a867ac859f77c7e4793848a",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Actores\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_imagen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_biografia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pelicula\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sipnosis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_distribucion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promocionar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duracion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distribuidor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_trailer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Actores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[\"solicitud_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ActoresOnPeliculas\":{\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Actores\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[\"actor_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[\"pelicula_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actor_id\",\"pelicula_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Solicitud\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Solicitud_estado\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_envio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_respuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rol\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Solicitud\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Solicitud_estado\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"RECHAZADA\",\"dbName\":null},{\"name\":\"APROBADA\",\"dbName\":null}],\"dbName\":null},\"Rol\":{\"values\":[{\"name\":\"USUARIO\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"PRODUCTOR\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

