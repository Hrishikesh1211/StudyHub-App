if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/67391b954691a4a172e9a614a6a5f3b1/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/67391b954691a4a172e9a614a6a5f3b1/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

