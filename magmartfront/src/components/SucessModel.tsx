import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';

export default function SuccessModal({ isOpen, onClose, mensagem1, mensagem2, rota }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose(); // Fecha o modal após 3 segundos
      }, 10000);
      window.location.href = rota;
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl transform transition-all duration-300 ease-out">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogTitle as="h3" className="mt-4 text-lg font-medium text-center text-gray-900">
            {mensagem1}
          </DialogTitle>
          <p className="mt-2 text-center text-sm text-gray-600">
            {mensagem2}
          </p>
          <div className="mt-4 flex justify-center">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-blue-500"
              onClick={onClose}
            >
              Entendi, obrigado!
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
