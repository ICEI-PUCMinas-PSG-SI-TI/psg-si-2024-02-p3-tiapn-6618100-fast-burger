CREATE TABLE mesa (
	numero smallint NOT NULL,
	quantidade_lugares smallint NOT NULL,
	CONSTRAINT mesa_pk PRIMARY KEY (numero)
);

CREATE TABLE pedido (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT now() NOT NULL,
	forma_pagamento text NULL,
	status text NULL,
	mesa int4 NULL,
	CONSTRAINT pedido_pk PRIMARY KEY (id),
	CONSTRAINT pedido_mesa_fk FOREIGN KEY (mesa) REFERENCES mesa(numero) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE cardapio (
	id serial4 NOT NULL,
	nome text NOT NULL,
	valor numeric NOT NULL,
	imagem text NULL,
	CONSTRAINT cardapio_pk PRIMARY KEY (id)
);

CREATE TABLE insumo (
	id serial4 NOT NULL,
	nome text NOT NULL,
	quantidade int4 DEFAULT 0 NULL,
	imagem text NULL,
	categoria text NULL,
	CONSTRAINT insumo_pk PRIMARY KEY (id)
);

CREATE TABLE pedido_cardapio (
	id_pedido int4 NOT NULL,
	id_cardapio int4 NOT NULL,
	valor numeric NOT NULL,
	quantidade smallint NOT NULL,
	CONSTRAINT pedido_cardapio_pk PRIMARY KEY (id_pedido, id_cardapio)
);

CREATE TABLE opcao_insumo (
	id_cardapio int4 NOT NULL,
	id_insumo int4 NOT NULL,
	quantidade smallint NULL,
	CONSTRAINT opcao_insumo_pk PRIMARY KEY (id_cardapio, id_insumo)
);


