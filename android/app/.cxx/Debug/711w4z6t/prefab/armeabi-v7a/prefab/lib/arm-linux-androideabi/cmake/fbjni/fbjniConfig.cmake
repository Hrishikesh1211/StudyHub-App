if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/home/ifryx/.gradle/caches/8.10.2/transforms/c85bd084d165cfbc0b28c6243cd0e365/transformed/fbjni-0.6.0/prefab/modules/fbjni/libs/android.armeabi-v7a/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/ifryx/.gradle/caches/8.10.2/transforms/c85bd084d165cfbc0b28c6243cd0e365/transformed/fbjni-0.6.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

