import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: number;
  nome: string;
  imagem: string;
  valor: number;
  qtde: number;
}

interface CartContextData {
  cart: {
    items: CartItem[];
    idUsuario: number;
    total: number;
  };
  addToCart: (item: CartItem) => void;
  removeFromCart: (idProduto: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{
    items: CartItem[];
    idUsuario: number;
    total: number;
  }>({
    items: [],
    idUsuario: Number(localStorage.getItem('idUsuario')),
    total: 0,
  });

  // Carregar o carrinho do localStorage ao montar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Atualizar o total do carrinho quando os itens mudarem
  useEffect(() => {
    const total = cart.items.reduce((acc, item) => acc + item.valor * item.qtde, 0);
    setCart((prevCart) => ({ ...prevCart, total }));
  }, [cart.items]);

  // Salvar o carrinho no localStorage quando ele mudar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // Produto já está no carrinho, atualiza a quantidade
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex].qtde += item.qtde;

        return {
          ...prevCart,
          items: updatedItems,
        };
      }

      // Produto não está no carrinho, adiciona ao array
      return {
        ...prevCart,
        items: [...prevCart.items, item],
      };
    });
  };

  const removeFromCart = (idProduto: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.id !== idProduto),
    }));
  };

  const clearCart = () => {
    setCart({ items: [], idUsuario: cart.idUsuario, total: 0 });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir o contexto
export const useCart = (): CartContextData => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
