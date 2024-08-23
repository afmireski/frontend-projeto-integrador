import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';

export default function SuccessModal({ isOpen, onClose, mensagem1, mensagem2, rota, erro }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose(); // Fecha o modal após 3 segundos
        if(erro){
          window.location.href = "/home";
        }else{
          window.location.href = rota;
        }
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl transform transition-all duration-300 ease-out">
          <div className="flex items-center justify-center">
            {erro ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-10.536a1 1 0 00-1.414-1.414L10 8.586 7.879 6.465a1 1 0 10-1.414 1.414L8.586 10l-2.121 2.121a1 1 0 001.414 1.414L10 11.414l2.121 2.121a1 1 0 001.414-1.414L11.414 10l2.121-2.121z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
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
            )}
          </div>
          <DialogTitle as="h3" className="mt-4 text-lg font-medium text-center text-gray-900">
            {mensagem1}
          </DialogTitle>
          <p className="mt-2 text-center text-sm text-gray-600">
            {mensagem2}
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
