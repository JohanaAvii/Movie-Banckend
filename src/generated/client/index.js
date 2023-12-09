
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
} = require('./runtime/library')


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


  const path = require('path')

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
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgICAgICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9jbGllbnQiCiAgYmluYXJ5VGFyZ2V0cyA9IFsiZGFyd2luIiwgImxpbnV4LW11c2wtb3BlbnNzbC0zLjAueCJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBBY3RvcmVzIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXJsX2ltYWdlbiAgICBTdHJpbmcKICB1cmxfYmlvZ3JhZmlhIFN0cmluZwogIHBlbGljdWxhX2lkICAgSW50CiAgUGVsaWN1bGEgICAgICBBY3RvcmVzT25QZWxpY3VsYXNbXQp9Cgptb2RlbCBQZWxpY3VsYSB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tYnJlICAgICAgICAgICAgIFN0cmluZwogIHNpcG5vc2lzICAgICAgICAgICBTdHJpbmcKICBmZWNoYV9kaXN0cmlidWNpb24gU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNCkKICBwcm9tb2Npb25hciAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBkdXJhY2lvbiAgICAgICAgICAgRmxvYXQ/CiAgZGlzdHJpYnVpZG9yICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGlzYW4gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig5NikKICB1cmxfcG9zdGVyICAgICAgICAgU3RyaW5nCiAgYXdzX3VybCAgICAgICAgICAgIFN0cmluZz8KICBhd3NfdHJhaWxlciAgICAgICAgU3RyaW5nPwogIHNvbGljaXR1ZF9pZCAgICAgICBJbnQgICAgICAgICAgICAgICAgICBAdW5pcXVlCiAgQWN0b3JlcyAgICAgICAgICAgIEFjdG9yZXNPblBlbGljdWxhc1tdCiAgc29saWNpdHVkICAgICAgICAgIFNvbGljaXR1ZCAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzb2xpY2l0dWRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBBY3RvcmVzT25QZWxpY3VsYXMgewogIGFjdG9yX2lkICAgIEludAogIHBlbGljdWxhX2lkIEludAogIGFjdG9yICAgICAgIEFjdG9yZXMgIEByZWxhdGlvbihmaWVsZHM6IFthY3Rvcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcGVsaWN1bGEgICAgUGVsaWN1bGEgQHJlbGF0aW9uKGZpZWxkczogW3BlbGljdWxhX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpZChbYWN0b3JfaWQsIHBlbGljdWxhX2lkXSkKICBAQGluZGV4KFtwZWxpY3VsYV9pZF0sIG1hcDogIkFjdG9yZXNPblBlbGljdWxhc19wZWxpY3VsYV9pZF9ma2V5IikKfQoKbW9kZWwgU29saWNpdHVkIHsKICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlc3RhZG8gICAgICAgICAgU29saWNpdHVkX2VzdGFkbz8gQGRlZmF1bHQoUEVORElFTlRFKQogIGZlY2hhX2VudmlvICAgICBEYXRlVGltZT8gICAgICAgICBAZGVmYXVsdChub3coKSkKICBmZWNoYV9yZXNwdWVzdGEgRGF0ZVRpbWU/CiAgb2JzZXJ2YWNpb25lcyAgIFN0cmluZz8KICB1c3VhcmlvX2lkICAgICAgSW50CiAgUGVsaWN1bGEgICAgICAgIFBlbGljdWxhPwogIFVzdWFyaW8gICAgICAgICBVc3VhcmlvICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXN1YXJpb19pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW3VzdWFyaW9faWRdLCBtYXA6ICJTb2xpY2l0dWRfdXN1YXJpb19pZF9ma2V5IikKfQoKbW9kZWwgVXN1YXJpbyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNvcnJlbyAgICAgICAgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcig1MCkKICBnZW5lcm8gICAgICAgICAgIFN0cmluZyAgICAgIEBkYi5DaGFyKDEpCiAgdGVsZWZvbm8gICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigxMCkKICByb2wgICAgICAgICAgICAgIFJvbAogIHBhc3N3b3JkICAgICAgICAgU3RyaW5nCiAgcHJpbWVyX2FwZWxsaWRvICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigyMCkKICBwcmltZXJfbm9tYnJlICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDIwKQogIHNlZ3VuZG9fYXBlbGxpZG8gU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoMjApCiAgc2VndW5kb19ub21icmUgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMCkKICBTb2xpY2l0dWQgICAgICAgIFNvbGljaXR1ZFtdCn0KCmVudW0gU29saWNpdHVkX2VzdGFkbyB7CiAgUEVORElFTlRFCiAgUkVDSEFaQURBCiAgQVBST0JBREEKfQoKZW51bSBSb2wgewogIFVTVUFSSU8KICBBRE1JTgogIFBST0RVQ1RPUgp9Cg==",
  "inlineSchemaHash": "e28ed81a3a93d770c442e3f4ef059feb393fb3d2bba47d9d7743082c1845926b",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Actores\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_imagen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_biografia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pelicula\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sipnosis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_distribucion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promocionar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duracion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distribuidor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aws_trailer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Actores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActoresOnPeliculas\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"solicitud\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[\"solicitud_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ActoresOnPeliculas\":{\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Actores\",\"relationName\":\"ActoresToActoresOnPeliculas\",\"relationFromFields\":[\"actor_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"ActoresOnPeliculasToPelicula\",\"relationFromFields\":[\"pelicula_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actor_id\",\"pelicula_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Solicitud\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Solicitud_estado\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_envio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_respuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pelicula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pelicula\",\"relationName\":\"PeliculaToSolicitud\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rol\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primer_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"segundo_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Solicitud\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Solicitud\",\"relationName\":\"SolicitudToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Solicitud_estado\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"RECHAZADA\",\"dbName\":null},{\"name\":\"APROBADA\",\"dbName\":null}],\"dbName\":null},\"Rol\":{\"values\":[{\"name\":\"USUARIO\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"PRODUCTOR\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "src/generated/client/libquery_engine-darwin.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/generated/client/libquery_engine-linux-musl-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
