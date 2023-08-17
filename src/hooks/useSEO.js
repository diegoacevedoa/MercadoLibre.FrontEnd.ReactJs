import { useEffect } from "react";

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Test Mercado Libre`;
    }
  }, [title]);

  useEffect(() => {
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );

      metaDescription.setAttribute("content", description);
    }
  }, [description]);
};
