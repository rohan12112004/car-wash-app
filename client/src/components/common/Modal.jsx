/**
 * @file Modal.jsx
 * @description Animated modal with backdrop blur and slide-up entry.
 */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, title }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10 border border-gray-100"
        >
          <div className="flex justify-between items-center mb-4">
            {title && <h3 className="text-xl font-heading font-bold text-text-dark">{title}</h3>}
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <X size={20} />
            </button>
          </div>
          <div>{children}</div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default Modal;
