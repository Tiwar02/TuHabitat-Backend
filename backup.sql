CREATE TABLE public.usuarios (
	nombre varchar(40) NOT NULL,
	id varchar(50) NOT NULL,
	email varchar(40) NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (id)
);


CREATE TABLE public.instalaciones (
	id int4 NOT NULL,
	nombre varchar(200) NOT NULL,
	descripcion text NULL
);

ALTER TABLE public.instalaciones ADD CONSTRAINT instalaciones_pk PRIMARY KEY (id);


CREATE TABLE public.reservas (
	id_reserva varchar NULL,
	id_usuario varchar NULL,
	id_instalacion varchar NULL,
	fecha varchar NULL,
	num_personas varchar NULL,
	CONSTRAINT reservas_pk PRIMARY KEY (id_reserva)
);

ALTER TABLE public.reservas ALTER COLUMN fecha TYPE date USING fecha::date;

ALTER TABLE public.reservas ALTER COLUMN num_personas TYPE int4 USING num_personas::int4;

ALTER TABLE public.usuarios ADD CONSTRAINT usuarios_fk FOREIGN KEY (id) REFERENCES public.reservas(id_reserva) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.usuarios ADD CONSTRAINT usuarios_fk_1 FOREIGN KEY (id) REFERENCES public.instalaciones(id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE public.usuarios DROP CONSTRAINT usuarios_fk;

ALTER TABLE public.reservas ADD CONSTRAINT reservas_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.reservas ALTER COLUMN id_instalacion TYPE int4 USING id_instalacion::int4;

ALTER TABLE public.reservas ADD CONSTRAINT reservas_fk2 FOREIGN KEY (id_instalacion) REFERENCES public.instalaciones(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


TABLA USUARIOS 

-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	nombre varchar(40) NOT NULL,
	id varchar(50) NOT NULL,
	email varchar(40) NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (id)
);

-- public.instalaciones definition

-- Drop table

-- DROP TABLE public.instalaciones;

CREATE TABLE public.instalaciones (
	id int4 NOT NULL,
	nombre varchar(200) NOT NULL,
	descripcion text NULL,
	CONSTRAINT instalaciones_pk PRIMARY KEY (id)
);

CREATE TABLE public.reservas (
	id_reserva varchar NOT NULL,
	id_usuario varchar NULL,
	id_instalacion int4 NULL,
	fecha date NULL,
	num_personas int4 NULL,
	CONSTRAINT reservas_pk PRIMARY KEY (id_reserva)
);


-- public.reservas foreign keys

ALTER TABLE public.reservas ADD CONSTRAINT reservas_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.reservas ADD CONSTRAINT reservas_fk2 FOREIGN KEY (id_instalacion) REFERENCES public.instalaciones(id) ON DELETE RESTRICT ON UPDATE RESTRICT;