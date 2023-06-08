// noinspection NonAsciiCharacters

export function useOptionMap() {
  const PriceOptions = {
    Любая: '',
    '< 1000 ₽': '1000',
    '< 900 ₽': '900',
    '< 800 ₽': '800',
    '< 700 ₽': '700',
    '< 600 ₽': '600',
    '< 500 ₽': '500',
  };

  const ReviewOptions = {
    Любой: '',
    '⭐⭐⭐⭐ и более': '4',
    '⭐⭐⭐ и более': '3',
  };

  return { PriceOptions, ReviewOptions };
}
