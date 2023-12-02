
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
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
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

exports.Usuario_rol = exports.$Enums.Usuario_rol = {
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
      "value": "/home/jhonatan/Documents/Proyecto/marine/Movie-Banckend/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgICAgICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9jbGllbnQiCiAgYmluYXJ5VGFyZ2V0cyA9IFsibmF0aXZlIiwgImxpbnV4LW11c2wtb3BlbnNzbC0zLjAueCIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBBY3RvcmVzIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXJsX2ltYWdlbiAgICBTdHJpbmcKICB1cmxfYmlvZ3JhZmlhIFN0cmluZwogIHBlbGljdWxhX2lkICAgSW50CiAgUGVsaWN1bGEgICAgICBBY3RvcmVzT25QZWxpY3VsYXNbXQp9Cgptb2RlbCBQZWxpY3VsYSB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tYnJlICAgICAgICAgICAgIFN0cmluZwogIHNpcG5vc2lzICAgICAgICAgICBTdHJpbmcKICBmZWNoYV9kaXN0cmlidWNpb24gU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNCkKICBwcm9tb2Npb25hciAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBkdXJhY2lvbiAgICAgICAgICAgRmxvYXQ/CiAgZGlzdHJpYnVpZG9yICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGlzYW4gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig5NikKICB1cmxfcG9zdGVyICAgICAgICAgU3RyaW5nCiAgYXdzX3VybCAgICAgICAgICAgIFN0cmluZz8KICBhd3NfdHJhaWxlciAgICAgICAgU3RyaW5nPwogIHNvbGljaXR1ZCAgICAgICAgICBTb2xpY2l0dWQgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc29saWNpdHVkX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzb2xpY2l0dWRfaWQgICAgICAgSW50ICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIEFjdG9yZXMgICAgICAgICAgICBBY3RvcmVzT25QZWxpY3VsYXNbXQp9Cgptb2RlbCBBY3RvcmVzT25QZWxpY3VsYXMgewogIGFjdG9yICAgICAgIEFjdG9yZXMgIEByZWxhdGlvbihmaWVsZHM6IFthY3Rvcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYWN0b3JfaWQgICAgSW50CiAgcGVsaWN1bGEgICAgUGVsaWN1bGEgQHJlbGF0aW9uKGZpZWxkczogW3BlbGljdWxhX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwZWxpY3VsYV9pZCBJbnQKCiAgQEBpZChbYWN0b3JfaWQsIHBlbGljdWxhX2lkXSkKfQoKbW9kZWwgU29saWNpdHVkIHsKICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlc3RhZG8gICAgICAgICAgU29saWNpdHVkX2VzdGFkbz8gQGRlZmF1bHQoUEVORElFTlRFKQogIGZlY2hhX2VudmlvICAgICBEYXRlVGltZT8gICAgICAgICBAZGVmYXVsdChub3coKSkKICBmZWNoYV9yZXNwdWVzdGEgRGF0ZVRpbWU/CiAgb2JzZXJ2YWNpb25lcyAgIFN0cmluZz8KICB1c3VhcmlvX2lkICAgICAgSW50CiAgVXN1YXJpbyAgICAgICAgIFVzdWFyaW8gICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c3VhcmlvX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICBQZWxpY3VsYSAgICAgICAgUGVsaWN1bGE/CgogIEBAaW5kZXgoW3VzdWFyaW9faWRdLCBtYXA6ICJTb2xpY2l0dWRfdXN1YXJpb19pZF9ma2V5IikKfQoKbW9kZWwgVXN1YXJpbyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNvcnJlbyAgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcig1MCkKICBnZW5lcm8gICAgICAgICAgIFN0cmluZyAgICAgIEBkYi5DaGFyKDEpCiAgdGVsZWZvbm8gICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigxMCkKICByb2wgICAgICAgICAgICAgIFVzdWFyaW9fcm9sCiAgcGFzc3dvcmQgICAgICAgICBTdHJpbmcKICBwcmltZXJfYXBlbGxpZG8gIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDIwKQogIHByaW1lcl9ub21icmUgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMjApCiAgc2VndW5kb19hcGVsbGlkbyBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMCkKICBzZWd1bmRvX25vbWJyZSAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDIwKQogIFNvbGljaXR1ZCAgICAgICAgU29saWNpdHVkW10KfQoKZW51bSBTb2xpY2l0dWRfZXN0YWRvIHsKICBQRU5ESUVOVEUKICBSRUNIQVpBREEKICBBUFJPQkFEQQp9CgplbnVtIFVzdWFyaW9fcm9sIHsKICBVU1VBUklPCiAgQURNSU4KICBQUk9EVUNUT1IKfQo=",
  "inlineSchemaHash": "27d6b9105e011c91449eab524246b967b65e225dba0950da0fa1671948b6a9cb",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Actores\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_imagen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_biografia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pelicula\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sipnosis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_distribucion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promocionar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duracion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distribuidor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_trailer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[\"solicitud_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Actores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ActoresOnPeliculas\":{\"dbName\":null,\"fields\":[{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Actores\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[\"actor_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[\"pelicula_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actor_id\",\"pelicula_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Solicitud\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Solicitud_estado\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_envio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_respuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario_rol\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Solicitud\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Solicitud_estado\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"RECHAZADA\",\"dbName\":null},{\"name\":\"APROBADA\",\"dbName\":null}],\"dbName\":null},\"Usuario_rol\":{\"values\":[{\"name\":\"USUARIO\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"PRODUCTOR\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

