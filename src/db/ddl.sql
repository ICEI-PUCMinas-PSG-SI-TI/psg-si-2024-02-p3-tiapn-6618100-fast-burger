CREATE TABLE mesa (
	numero smallint NOT NULL,
	quantidade_lugares smallint NOT NULL,
	CONSTRAINT mesa_pk PRIMARY KEY (numero)
);

CREATE TABLE pedido (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT now() NOT NULL,
	forma_pagamento text NULL,
	status text DEFAULT 'Aguardando Pagamento'::text NULL,
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
	quantidade int2 NOT NULL,
	CONSTRAINT pedido_cardapio_pk PRIMARY KEY (id_pedido, id_cardapio),
	CONSTRAINT cardapio_fk FOREIGN KEY (id_cardapio) REFERENCES cardapio(id) ON DELETE SET NULL ON UPDATE CASCADE,
	CONSTRAINT pedido_fk FOREIGN KEY (id_pedido) REFERENCES pedido(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE opcao_insumo (
	id_cardapio int4 NOT NULL,
	id_insumo int4 NOT NULL,
	quantidade int2 NULL,
	CONSTRAINT opcao_insumo_pk PRIMARY KEY (id_cardapio, id_insumo),
	CONSTRAINT cardapio_fk FOREIGN KEY (id_cardapio) REFERENCES cardapio(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT insumo_fk FOREIGN KEY (id_insumo) REFERENCES insumo(id) ON DELETE CASCADE ON UPDATE CASCADE
);

